using BootcampAPI.Models;
using BootcampAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BootcampAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        // DI
        private IProductRepository _productRepository;
        public ProductsController(IProductRepository productRepository) => _productRepository = productRepository;

        [HttpGet]
        public List<Product> Get()
        {
            return _productRepository.Get().ToList();
        }
    }
}
