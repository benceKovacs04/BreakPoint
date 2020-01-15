using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BreakPoint.Model.DbModel
{
    public class User : IdentityUser
    {
        [Column(TypeName = "Date")]
        public DateTime RegistrationDate { get; set; }
        /*[InverseProperty("User")]
        public List<User> Friends { get; set; }*/
        
        //public List<Post> Posts { get; set; }
    }
}