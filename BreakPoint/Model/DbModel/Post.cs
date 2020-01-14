using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BreakPoint.Model.DbModel
{
    public class Post
    {
        public int ID { get; set; }

        public string? ImagePath { get; set; }

        public string? Content { get; set; }
        
        [Column(TypeName = "Date")]
        public DateTime CreationTime { get; set; }
        
        public int UserId { get; set; }
        
        public User User { get; set; }

    }
}