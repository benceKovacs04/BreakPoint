using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakPoint.Model
{
    public class News
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("originId")]
        public string OriginalURL { get; set; }
        [JsonProperty("content")]
        public Dictionary<string, string> Content { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("updated")]
        public long Updated { get; set; }
        [JsonProperty("visual")]
        public Dictionary<string, string> ImageURL { get; set; }

    }
}
