using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakPoint.Model
{
    public class RSS
    {
        [JsonProperty("title")]
        public string Title { get; private set; }
        [JsonProperty("website")]
        public string SiteURL { get; private set; }
        [JsonProperty("feedId")]
        public string FeedURL { get; private set; }
        [JsonProperty("subscribers")]
        public int Subscribers { get; private set; }
    }
}
