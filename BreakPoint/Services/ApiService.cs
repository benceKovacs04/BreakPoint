using BreakPoint.Interfaces;
using BreakPoint.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BreakPoint.Services
{
    public class ApiService : IApiService<RSS>
    {
        private readonly string API_PATH = "https://cloud.feedly.com/v3/search/feeds/?query=";
        public HashSet<RSS> GetRSSBy(string query)
        {
            throw new NotImplementedException();
        }

        /*private async Task<string> GetData(string query)
        {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync(API_PATH + query);
        }

        private HashSet<RSS> BuildRSSSet(string jsonData)
        {

        }*/
    }
}
