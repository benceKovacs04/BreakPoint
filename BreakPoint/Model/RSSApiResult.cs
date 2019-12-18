using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakPoint.Model
{
    public class RSSApiResult
    {
        [JsonProperty("results")]
        public List<RSS> Result;
    }
}
