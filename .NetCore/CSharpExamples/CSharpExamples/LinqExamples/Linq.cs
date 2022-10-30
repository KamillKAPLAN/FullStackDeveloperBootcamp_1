using System;
using System.Collections.Generic;
using System.Linq;

namespace CSharpExamples.LinqExamples
{
    class Linq
    {
        void Example()
        {
            #region 30.10.2022
            /*
             * Temle C#
             int a = 4, b = 3, c = 2;
            if (a != b || a == c)
                Console.WriteLine("tek doğru");
            else
                Console.WriteLine("doğru yok");

            a = Int32.Parse(Console.ReadLine());
            switch (a)
            {
                case (0): Console.WriteLine($"Değer : {a}"); break;
                case (1): Console.WriteLine($"Değer : {a}"); break;
                case (2): Console.WriteLine($"Değer : {a}"); break;
                case (3): Console.WriteLine($"Değer : {a}"); break;
                case (4): Console.WriteLine($"Değer : {a}"); break;
                default: Console.WriteLine($"Tanımsız Değer : {a}"); goto case 0;
            }

            var result = a switch
            {
                1 => $"Değer : {a}",
                2 => $"Değer : {a}",
                3 => $"Değer : {a}",
                4 => $"Değer : {a}",
                _ => $"Tanımsız Değer : {a}"
            };

            for (int i = 0; i < length; i++)
            {

            }
            foreach (var item in collection)
            {

            }
            while (true)
            {

            }
            do
            {

            } while (true);
             
             *Linq
              - Ado.Net, Dapper, EntityFramewok
              ** QUERY Syntax
              ** Method Syntax 
             // QUERY
            var result = from sayi in sayilar
                         where sayi < 5
                         select sayi;
            // METOT
            var result2 = sayilar.Where(x => x < 5);
             */
            #endregion
            int[] sayilar = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            List<int> number = new List<int>();

            List<Course> courses = new List<Course>()
            {
                new Course() { Id = 1, Subject = "Linq", Order = 5, IsActive= false},
                new Course() { Id = 2, Subject = "mssql", Order = 3, IsActive= true},
                new Course() { Id = 3, Subject = "C#", Order = 4, IsActive= false},

                new FreeCourse() {Id = 7, Subject = "Angular", Order= 7, IsActive= true},
                new PaidCourse() {Id = 8, Subject = "Blazor", Order= 8, Price= 1500, IsActive= false},
                new PaidCourse() {Id = 9, Subject = "VueJS", Order= 9, Price= 2000, IsActive= false},

            };
            courses.Add(new Course() { Id = 4, Subject = "react", Order = 2, IsActive = true });
            courses.Add(new Course() { Id = 5, Subject = ".net core", Order = 1, IsActive = true });
            courses.Add(new Course() { Id = 6, Subject = "devextreme", Order = 6, IsActive = false });
            // Where
            var result = from course in courses
                         where course.Order > 3
                         select course;

            var result2 = courses.Where(x => x.Order > 3);
            //foreach (var item in result2)
            //    Console.WriteLine($"{item.Id} : {item.Subject} - {item.Order}"); 

            // OfType
            var paidCourses = from paidCourse in courses.OfType<PaidCourse>()
                              where paidCourse.Price > 1600
                              select paidCourse;
            //foreach (var item in paidCourses)
            //    Console.WriteLine($"{item.Id} : {item.Subject} - {item.Order} = {item.Price} TL");

            var freeCourses = courses.OfType<FreeCourse>();
            //foreach (var item in freeCourses)
            //    Console.WriteLine($"{item.Id} : {item.Subject} - {item.Order}");

            // OrderBy
            var orderByResult = from course in courses
                                orderby course.IsActive, course.Order descending, course.Subject
                                select course;
            foreach (var item in orderByResult)
                Console.WriteLine($"{item.Id} : {item.Subject} - {item.Order} - {item.IsActive}");

            var orderByResult2 = courses.OrderBy(x => x.IsActive).ThenByDescending(x => x.Order).ThenBy(x => x.Subject);
            foreach (var item in orderByResult2)
                Console.WriteLine($"{item.Id} : {item.Subject} - {item.Order} - {item.IsActive}");

            // IQueryable & IEnumerable || Any&Contains Fark
            // Union() - Distinct() - Any() - All() - Contains() - Select() - Sum() - Count() - Min() - Max() - Average()
        }
    }

    class Course
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
    }

    class PaidCourse : Course
    {
        public decimal Price { get; set; }
    }

    class FreeCourse : Course { }
}
