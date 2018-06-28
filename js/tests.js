var myAbTest = ABTest({
    name: "Example_Test",
    customVarSlot: 1,
    variations: {
        first_variation: function () {
            console.log("first test");
        },
        another_variation: function () {
            window.location.href = "http://drewswinburne.github.io/test2.html?abjs-setvar-Example_Test=another_variation&abjs-setcookie=yes"
        },
        third_variation: function () {
            window.location.href = "http://drewswinburne.github.io/test4.html?abjs-setvar-Example_Test=third_variation&abjs-setcookie=yes"
        },
        control: function () { /* Empty function. */
          console.log("control");
        }
    }
});
