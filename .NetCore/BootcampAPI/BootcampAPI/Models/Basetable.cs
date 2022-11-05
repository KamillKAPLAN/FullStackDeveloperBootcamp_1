using System;

namespace BootcampAPI.Models
{
    public abstract class Basetable
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime DeletedAt { get; set; }
        public bool IsDeleted { get; set; }

        // public abstract void GetDate();
        // abstract, virtual, interface, polymorphism, inheritance, encapsulation,
    }
}
