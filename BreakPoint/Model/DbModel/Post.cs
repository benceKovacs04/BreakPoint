using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BreakPoint.Model.DbModel
{
    public class Post
    {
        public int Id { get; set; }

        public string? ImagePath { get; set; }

        public string? Content { get; set; }
        
        [Column(TypeName = "Date")]
        public DateTime CreationTime { get; set; }
        
        public string UserId { get; set; }
        
        public string User { get; set; }

    }
}