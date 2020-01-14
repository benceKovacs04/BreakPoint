using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace BreakPoint.Model.DbModel
{
    public class User
    {
        public int ID { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }
        
        public string Password { get; set; }
        
        [Column(TypeName = "Date")]
        public DateTime RegistrationDate { get; set; }

        public List<User> Friends { get; set; }

        public List<Post> Posts { get; set; }
        
    }
}