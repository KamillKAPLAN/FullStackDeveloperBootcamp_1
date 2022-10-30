using System;
using System.Collections.Generic;

namespace BootcampAPI
{
    public class WeatherForecast
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public List<WeatherForecast> GetAllWeatherForecast()
        {
            var rng = new Random();
            List<WeatherForecast> weatherForecasts = new List<WeatherForecast>()
            {
                new WeatherForecast(){ Id = 1, Date = DateTime.Now, Summary = Summaries[rng.Next(Summaries.Length)], TemperatureC = rng.Next(-20, 55) },
                new WeatherForecast(){ Id = 2, Date = DateTime.Now, Summary = Summaries[rng.Next(Summaries.Length)], TemperatureC = rng.Next(-20, 55) },
                new WeatherForecast(){ Id = 3, Date = DateTime.Now, Summary = Summaries[rng.Next(Summaries.Length)], TemperatureC = rng.Next(-20, 55) },
                new WeatherForecast(){ Id = 4, Date = DateTime.Now, Summary = Summaries[rng.Next(Summaries.Length)], TemperatureC = rng.Next(-20, 55) },
                new WeatherForecast(){ Id = 5, Date = DateTime.Now, Summary = Summaries[rng.Next(Summaries.Length)], TemperatureC = rng.Next(-20, 55) }
            };

            return weatherForecasts;
        }
    }
}
