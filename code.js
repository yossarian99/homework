(function (global) {
    var mapArray;

    if (!global.UAM) {
        global.UAM = {};
    }

    global.UAM.library = [];

    // BELOW SAMPLES SHOW STRUCTURE OF CATEGORY OBJECT AND STUCTURE OF BOOKS OBJECT INSIDE CATEGORY
    //
    // global.UAM.library.push({
    //     categoryName: 'Kryminał',
    //     books: []
    // });

    // global.UAM.library[0].books.push({
    //     title: 'Pan Tadeusz',
    //     count: 3
    // });

    //////////////////////////////////////////////////////////////////////////////////////

    // newCategoryName: String
    global.UAM.addCategory = function (newCategoryName) {
        global.UAM.library.push({
            categoryName: newCategoryName,
            books: []
        });
        return newCategoryName;
        // function should return new category object
    };

    // categoryObject: Object
    global.UAM.removeCategory = function (categoryObject) {
        var i;
        global.UAM.liblary.forEach(function (el, i) {
            if (el === categoryObject) {
                global.UAM.library[i].forEach(function (id, k) {
                    global.UAM.library[i][k].pop();
                })
            }
        });
        global.UAM.library.forEach((function (el, i) {
            if (el === categoryObject) {
                global.UAM.library.pop();
            }
        }));
        // !!!
    };

    // categoryObject: Object
    // title: String
    // count: Number
    global.UAM.addBookToCategory = function (categoryObject, title, count) {

        global.UAM.library.forEach(function (el, i) {
            if (el !== categoryObject) {
            } else {

                var liczba;
                var tytul;
                global.UAM.library[i].books.push({
                    tytul: title,
                     liczba : count
                });
            }
        });


    };

// !!
    global.UAM.library.forEach(function (el, i) {
        if (el === categoryObject) {
            global.UAM.library[i].books.forEach(function (kk, l) {
                if (kk === global.UAM.library.books.tytul) {
                    return global.UAM.library[i].books[l];
                }
            });
        }
    });
    // function should return new book object


    // categoryObject: Object
    // bookObject: Object
    global.UAM.removeBookFromCategory = function (categoryObject, bookObject) {
        // !!!

        // !!
        global.UAM.library.forEach(function (el, i) {
            if (el === categoryObject) {
                global.UAM.library[i].books.forEach(function (kk, l) {
                    if (global.UAM.library.book[l] === bookObjeckt) {
                        global.UAM.library[i - 1].book.splice(l, 1);
                    }
                });
            }
        });
    };

    // categoryName: String
    global.UAM.getCategoryByName = function (categoryName) {
        global.UAM.library.forEach(function (kl, i) {
            if (categoryName === kl) {
                return global.UAM.library[i];
            }

        });
        // !!!
        // function should return category object
    };

    // title: String
    global.UAM.getBookByTitle = function (title) {
        global.UAM.library.forEach(function (el, i) {

            global.UAM.library[i].books.forEach(function (kk, l) {
                if (kk === title) {
                    return global.UAM.library[i].books;
                }


            })
        });
        // !!!
        // function should return book object
    };

    // bookObject: Object
    global.UAM.returnBook = function (bookObject) {
        // !!!
        global.UAM.library.forEach(function (el, i) {

            global.UAM.library[i].books.forEach(function (kk, l) {
                if (kk === global.UAM.library.books[l]) {
                    return global.UAM.library[i].books[l];
                }


            })
        });
    };

    global.UAM.getBorrowedBooks = function () {
        // !!!
        var arrayofbooks = [];
        global.UAM.library.forEach(function (el, i) {

            global.UAM.library[i].books.forEach(function (kk, l) {

                    if (global.UAM.library[i].books[l].count === 0) {
                        arrayofobooks.push(global.UAM.library[i].books.slce(l - 1, 1));
                    }



            });
            // return array of book objects
            //szukamy takie w tkorych coutn jest ustawione na 0
        });
        return arrayofbooks;
    };
})

(window)();

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

*/
