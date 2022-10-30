using System;

namespace BootcampAPI.Models
{
    public class Movie : Basetable
    {
        /* DataAnotation - Fluent API */
        public string? Title { get; set; }
        public string? Type { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
