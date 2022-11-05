using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BootcampAPI.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string StudentName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }

        public int GradeId { get; set; }
        public Grade Grade { get; set; }
        public StudentAddress StudentAddress { get; set; }
    }
}
