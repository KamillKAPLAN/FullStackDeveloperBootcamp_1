using BootcampAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly DBFullStackContext _dbContext;
        //public MoviesController(DBFullStackContext dbContext) => _dbContext = dbContext; /* DI */
        public MoviesController() => _dbContext = new DBFullStackContext(); 

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> Get()
        {
            if (_dbContext.Movies == null)
                return NotFound();
            return await _dbContext.Movies.Where(x => !x.IsDeleted).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> Get(int id)
        {
            var result = _dbContext.Movies.Any(x => x.Id == 3);
            var ress = (_dbContext.Movies?.Any(e => e.Id != id)).GetValueOrDefault();
            if (_dbContext.Movies == null || ress)
                return NotFound();
            return await _dbContext.Movies.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<Movie>> Post(Movie movie)
        {
            _dbContext.Movies.Add(movie);
            await _dbContext.SaveChangesAsync();
            return Ok("Başarıyla eklendi.");
        }

        [HttpPut] /* DTO */
        public async Task<ActionResult> Put(int id, Movie movie)
        {
            if (id != movie.Id)
                return BadRequest();

            _dbContext.Entry(movie).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if (!MovieExxits(id))
                    return NotFound();
                else
                    throw;
            }
            return NoContent();
        }

        private bool MovieExxits(long id)
        {
            return (_dbContext.Movies?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            if (_dbContext.Movies == null)
                return NotFound();

            var findMovie = await _dbContext.Movies.FindAsync(id);
            if (findMovie == null)
                return NotFound();  

            _dbContext.Movies.Remove(findMovie);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

    }
}
