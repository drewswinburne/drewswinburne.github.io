var myAbTest = ABTest({
    name: "Example_Test",
    customVarSlot: 1,
    variations: {
        first_variation: function () {
            console.log("first test");
        },
        another_variation: function () {
            window.location.href = "//drewswinburne.github.io/test2.html"
        },
        third_variation: function () {
            window.location.href = "//drewswinburne.github.io/test4.html"
        },
        control: function () { /* Empty function. */
          console.log("control");
        }
    }
});
