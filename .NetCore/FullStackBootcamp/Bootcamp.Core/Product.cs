using System.ComponentModel.DataAnnotations.Schema;

namespace Bootcamp.Core
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public int Stock { get; set; }
        public decimal Price { get; set; }

        /* 1-n ilişki */
        /*[ForeignKey("Category_Id")]
        public int Category_Id { get; set; } */
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public ProductFeature ProductFeature { get; set; }

        /*
          public string? Name { get; set; }
          if (Name != null) { } else { }
          var x = Name != null ? "" : "";
          var y = Name ?? "";
         */
    }
}
