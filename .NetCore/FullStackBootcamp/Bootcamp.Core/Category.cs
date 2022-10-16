using System.Collections.Generic;

namespace Bootcamp.Core
{
    public class Category : BaseEntity
    {
        public int Name { get; set; }

        /* navigation property */
        public ICollection<Product> Products { get; set; }
    }
}
