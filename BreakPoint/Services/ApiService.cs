using BreakPoint.Interfaces;
using BreakPoint.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace BreakPoint.Services
{

    public class ApiService : IApiService<RSS>
    {
        private readonly string API_PATH = "https://cloud.feedly.com/v3/search/feeds/?query=";
        public async Task<List<RSS>> GetRSSBy(string query)
        {
            string data = await GetData(query);
            List<RSS> rssList = BuildRSSSet(data);
            return rssList;
        }

        private async Task<string> GetData(string query)
        {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync(API_PATH + query);
        }

        private List<RSS> BuildRSSSet(string jsonData)
        {
            RSSApiResult rrr = JsonConvert.DeserializeObject<RSSApiResult>(jsonData);
            int a = 54;
            /*
                        JObject json = (JObject)JsonConvert.DeserializeObject(jsonData);
                        var aaa =json.Value<JArray>("results");

                        foreach (var item in json)
                        {

                            foreach (var res in item.results)
                            {
                                Console.WriteLine("RES " + res);
                            }
                        }
                        */
            return new List<RSS>();
        }
    }
}
