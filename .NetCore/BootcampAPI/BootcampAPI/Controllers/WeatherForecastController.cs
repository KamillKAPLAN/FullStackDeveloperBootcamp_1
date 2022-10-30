using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        List<WeatherForecast> weatherForecasts;
        WeatherForecast weatherForecast = new WeatherForecast();
        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            weatherForecasts = weatherForecast.GetAllWeatherForecast();
        }

        [HttpGet("weathers")]
        public IEnumerable<WeatherForecast> Get()
        {
            return weatherForecasts;
        }

        [HttpGet("weathers/{id}")]
        public WeatherForecast Get(int id)
        {
            return weatherForecasts.Find(x => x.Id == id);
        }

        [HttpPost("weathers")]
        public WeatherForecast Post([FromBody] WeatherForecast weatherForecast)
        {
            weatherForecasts.Add(weatherForecast);
            var result = weatherForecasts.Find(x => x.Id == weatherForecast.Id);
            return result;
        }

        [HttpPut("weathers")]
        public IActionResult Put([FromBody] WeatherForecast weatherForecast)
        {
            var result = weatherForecasts.Find(x => x.Id == weatherForecast.Id);
            result.Summary = weatherForecast.Summary;
            result.TemperatureC = weatherForecast.TemperatureC;
            result.Date = weatherForecast.Date;

            return Ok("Başarıyla güncellendi");
        }

        [HttpDelete("weathers/{id}")]
        public IActionResult Delete(int id)
        {
            var findRecoud = weatherForecasts.Find(x => x.Id == id);
            bool sonuc = false;
            if (findRecoud != null)
                sonuc = weatherForecasts.Remove(findRecoud);
            if (sonuc)
                return Ok($"{findRecoud.Summary} Silindi");
            return BadRequest($"{findRecoud.Summary} Silinemedi");
        }
    }
}
