using System;

namespace Bootcamp.Core
{
    public abstract class BaseEntity
    {
        /* ortak property veya ortak metot tanımladığımız yerklerdir. 
         * interface ’lerde «soyut» nesnelerdir. Orada constructor ‘ımızı, 
           sözleşmemizi tanımlarız. Interface ’ler ile yapabildiklerimizi abstract‘lar 
           ilede yapabiliriz. Çünkü ikiside soyut yapılardır.
         */
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CreatedBy { get; set; }
        public DateTime DeletedAt { get; set; }
        public int DeletedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}
