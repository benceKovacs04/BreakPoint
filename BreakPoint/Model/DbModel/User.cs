using System.Collections.Generic;
using Newtonsoft.Json;

namespace BreakPoint.Model.DbModel
{
    public class User
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("username")]
        public string Username { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }
        
        [JsonProperty("password")]
        public string Password { get; set; }
        
        [JsonProperty("reg_date")]
        public long RegistrationDate { get; set; }

        [JsonProperty("friends")]
        public List<User> Friends { get; set; }
        
    }
}