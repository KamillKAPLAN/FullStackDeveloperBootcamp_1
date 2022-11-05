using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BootcampAPI.Models
{
    //[Table("StudentMastes")]
    public class Student
    {
        /* [Key] */
        public int Id { get; set; }
        // [StringLength(25)]
        public string StudentName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }

        //[ForeignKey("")]
        public int GradeId { get; set; }
        public Grade Grade { get; set; }
    }
}
