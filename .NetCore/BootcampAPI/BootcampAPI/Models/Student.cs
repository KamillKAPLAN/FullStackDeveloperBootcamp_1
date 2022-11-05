using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BootcampAPI.Models
{
    [Table("StudentMastes", Schema ="Back")]
    public class Student
    {
        [Key]
        public int SID { get; set; }
        [Column("Name", TypeName = "ntext", Order =0)]
        [StringLength(25)]
        public string StudentName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        [Required]
        public decimal Height { get; set; }
        [NotMapped]
        public float Weight { get; set; }

        [ForeignKey("FK_GradeId")]
        public int GradeId { get; set; }
        public Grade Grade { get; set; }

        public StudentAddress StudentAddress { get; set; }
    }
}
