using Angular2.Sample.Forms.Models;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace Angular2.Sample.Forms.Controllers
{
    [RoutePrefix("api/persons")]
    public class PersonsController : ApiController
    {
        Person[] persons = new Person[]
        {
            new Person { Id = 1, FirstName = "Suresh", LastName = "Alaya", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1989, 1, 18),MobileNo=988787 },
            new Person { Id = 2, FirstName = "naresh", LastName = "Amol", Address = "dummy",CountryCode="ASM",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1990, 2, 18),MobileNo=988787 },
            new Person { Id = 3, FirstName = "Mahesh", LastName = "Amogh", Address = "dummy",CountryCode="ARG",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1993, 3, 18),MobileNo=988787 },
            new Person { Id = 4, FirstName = "Akarsh", LastName = "Ananya", Address = "dummy",CountryCode="AUS",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1997, 4, 18),MobileNo=988787 },
            new Person { Id = 5, FirstName = "Aniruddh", LastName = "Anaya", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ" ,DOB=new DateTime(1986, 5, 18),MobileNo=988787},
            new Person { Id = 6, FirstName = "Chirag", LastName = "Animesh", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1985, 2, 18),MobileNo=988787 },
            new Person { Id = 7, FirstName = "Darshit", LastName = "Anjili", Address = "dummy",CountryCode="AUS",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1984, 3, 18),MobileNo=123456 },
            new Person { Id = 8, FirstName = "Devansh", LastName = "Aparna", Address = "dummy",CountryCode="BMU",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1995, 6, 18),MobileNo=988787 },
            new Person { Id = 9, FirstName = "Dhruv", LastName = "Aruni", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1954, 8, 18) ,MobileNo=988787},
            new Person { Id = 10, FirstName = "Divit", LastName = "Arunachalam", Address = "dummy",CountryCode="ARG",StateCode="AP",CityCode="VIZ" ,DOB=new DateTime(1966, 7, 18),MobileNo=988787},
            new Person { Id = 11, FirstName = "Eshan", LastName = "Asavari", Address = "dummy",CountryCode="AUS",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1917, 7, 18),MobileNo=17658 },
            new Person { Id = 12, FirstName = "Faiyaz", LastName = "Ashank", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1989, 7, 18),MobileNo=988787 },
            new Person { Id = 13, FirstName = "Hansh", LastName = "Arvieta", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1987, 8, 18),MobileNo=988787 },
            new Person { Id = 14, FirstName = "Hiran", LastName = "Arva", Address = "dummy",CountryCode="ARG",StateCode="AP",CityCode="VIZ" ,DOB=new DateTime(1992, 9, 18),MobileNo=879548},
            new Person { Id = 15, FirstName = "Lakshit", LastName = "Arunima", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1984, 10, 18),MobileNo=988787 },
            new Person { Id = 16, FirstName = "Jayesh", LastName = "Aruni", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1986, 9, 18),MobileNo=988787 },
            new Person { Id = 17, FirstName = "Lakshy", LastName = "Arvina", Address = "dummy",CountryCode="ARG",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1990, 9, 18),MobileNo=988787 },
            new Person { Id = 18, FirstName = "Nishith", LastName = "Ashmi", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1991, 8, 18),MobileNo=988787 },
            new Person { Id = 19, FirstName = "Ojas", LastName = "Ashna", Address = "dummy",CountryCode="Ind",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1989, 9, 18),MobileNo=988787 },
            new Person { Id = 20, FirstName = "Pranay", LastName = "Ashish", Address = "dummy",CountryCode="ARG",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1945, 12, 18),MobileNo=988787 },
            new Person { Id = 21, FirstName = "Priyansh", LastName = "Asmina", Address = "dummy",CountryCode="AUS",StateCode="AP",CityCode="VIZ",DOB=new DateTime(1956, 11, 18) ,MobileNo=988787}
        };
        [HttpPost]
        [Route("getAllbyRequest")]
        public PersonRespone GetAllProducts(PersonRequest request)
        {
            var response = new PersonRespone();

            response.person = persons.ToList();

            if (!string.IsNullOrEmpty(request?.keyword))
            {
                response.person = persons.Where(x => x.FirstName.Contains(request.keyword) || x.LastName.Contains(request.keyword)).Select(m => m).ToList();
            }

            if(!string.IsNullOrEmpty(request?.countryCode))
            {
                response.person = persons.Where(x => x.CountryCode.Contains(request.countryCode)).Select(m => m).ToList();
            }

            // response.person = persons.ToList();
            if (request?.sortOrder != "") { 
                switch (request.sortOrder)
                {
                    case "FirstName":
                        response.person = response.person.OrderBy(s => s.FirstName).ToList();
                        break;
                    case "FirstName_desc":
                        response.person = response.person.OrderByDescending(s => s.FirstName).ToList();
                        break;
                    case "Address":
                        response.person = response.person.OrderBy(s => s.Address).ToList();
                        break;
                    case "Address_desc":
                        response.person = response.person.OrderByDescending(s => s.Address).ToList();
                        break;
                    case "MobileNo":
                        response.person = response.person.OrderBy(s => s.MobileNo).ToList();
                        break;
                    case "MobileNo_desc":
                        response.person = response.person.OrderByDescending(s => s.MobileNo).ToList();
                        break;
                    case "LastName":
                        response.person = response.person.OrderBy(s => s.LastName).ToList();
                        break;
                    case "LastName_desc":
                        response.person = response.person.OrderByDescending(s => s.LastName).ToList();
                        break;
                    case "Country":
                        response.person = response.person.OrderBy(s => s.CountryCode).ToList();
                        break;
                    case "Country_desc":
                        response.person = response.person.OrderByDescending(s => s.CountryCode).ToList();
                        break;

                }
            }
            response.person = response.person.Skip(request.skipCount * request.takeCount).Take(request.takeCount).ToList();

            //response.person = response.person.Where(m => m.userRoles.Select(x => x.PersonId == m.Id).Select(r => r.).ToList())).Select(m => m);
            //response.person = response.person.Where(m => m.userRoles.Select(x => x.PersonId == m.Id)).ToList();
            response.count = persons.Count();
            return response;
        }
        [Route("getbyid/{id}")]
        //[Route("getbyid")]
        [HttpPost]
        public Person GetPersonById(int id)
        {
            var person = persons.FirstOrDefault((p) => p.Id == id);
            if (person == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return person;
        }
        [HttpPut]
        [Route("updatePerson")]
        public void updatePerson(Person person)
        {
            var data = persons.Where(x => x.Id == person.Id).FirstOrDefault();
            data.FirstName = person.FirstName;
            data.LastName = person.LastName;
            data.MobileNo = person.MobileNo;
            data.CountryCode = person.CountryCode;
            data.DOB = person.DOB;
            foreach (Person r in persons)
            {
                if (r.Id == data.Id)
                {
                    r.FirstName = person.FirstName;
                    r.LastName = person.LastName;
                    r.MobileNo = person.MobileNo;
                    r.CountryCode = person.CountryCode;
                }
            }
        }
        [Route("country/getAll")]
        [HttpGet]
        public CountryResponse GetCountries()
        {
            var response = new CountryResponse();
            if (getCountry.countryData == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            response.country = getCountry.countryData;
            response.count = getCountry.countryData.Count();
            return response;
        }
    }
}
