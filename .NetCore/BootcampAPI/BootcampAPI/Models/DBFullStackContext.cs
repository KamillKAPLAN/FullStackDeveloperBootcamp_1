using Microsoft.EntityFrameworkCore;

namespace BootcampAPI.Models
{
    public class DBFullStackContext : DbContext
    {
        public DBFullStackContext(DbContextOptions<DBFullStackContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }

    }
}
