namespace Bootcamp.Core
{
    public class ProductFeature
    {
        /*IGenericRepository<Product> genericRepository;
        var x = genericRepository.GetAll(x => x.Price > 5).OrderBy(x => x.Price).ToList(); */

        /*[Key]
        public int ProductFeatureId { get; set; } */
        public int Id { get; set; }
        public string Color { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }

        /* ForeignKey */
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
