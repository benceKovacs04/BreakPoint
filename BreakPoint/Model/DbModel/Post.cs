using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BreakPoint.Model.DbModel
{
    public class Post
    {
        [Key]
        public int ID { get; set; }

        public string? ImagePath { get; set; }

        public string? Content { get; set; }
        
        [Column(TypeName = "Date")]
        public DateTime CreationTime { get; set; }
        
        [ForeignKey("ID")]
        public int UserID { get; set; }
        
        public User User { get; set; }

    }
}