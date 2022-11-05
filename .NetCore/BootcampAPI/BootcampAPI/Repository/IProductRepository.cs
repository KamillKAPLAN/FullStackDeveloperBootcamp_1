using BootcampAPI.Models;
using System.Collections.Generic;

namespace BootcampAPI.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Product> Get();
    }
}
