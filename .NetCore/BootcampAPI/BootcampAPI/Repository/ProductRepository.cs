using Bogus;
using BootcampAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace BootcampAPI.Repository
{
    public class ProductRepository : IProductRepository
    {
        public IEnumerable<Product> Get()
        {
            var products = new Faker<Product>("tr")
                .RuleFor(x => x.Id, x => x.IndexFaker)
                .RuleFor(x => x.Name, x => x.Commerce.ProductName())
                .RuleFor(x => x.Department, x => x.Commerce.Department())
                .RuleFor(x => x.Description, x => x.Commerce.ProductDescription())
                .RuleFor(x => x.Price, x => x.Commerce.Price(5, 1000, 2).First())
                .RuleFor(x => x.PictureUri, x => x.Commerce.Categories(1).First());

            return products.Generate(300);
        }
    }
}
