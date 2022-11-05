using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BootcampAPI.Models
{
    public class Grade
    {
        public int GradeId { get; set; }
        [MaxLength(25)]
        public string GradeName { get; set; }
        public string Section { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
