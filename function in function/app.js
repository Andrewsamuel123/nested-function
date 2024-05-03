function myFunc() {
    var name1 = "andrew";
    console.log(name1);
    function area() {
        var class1 = "Governor house";
        console.log(class1);
        function day() {
            var time1 = "friday 7 to 10";
            console.log(time1);
            function job() {
                var jobtype = "samba bank";
                console.log(jobtype);
            }
            job();
        }
        day();
    }
    area();
}
myFunc();
