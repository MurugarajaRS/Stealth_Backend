1) RUN `npm install` command
2) RUN THIS NODE APP IN LOCAL. APP WILL RUN IN http://localhost:5000

APIS :-
    GET ALL MOVIES :  http://localhost:5000/getMoviesList

    GET MOVIE BY NAME : http://localhost:5000/getMovie
        BODY : {"movieName" : "Enthiran"}
    
    ADD MOVIE : http://localhost:5000/addMovie
        BODY : {
                "movieName": "Bigil",
                "rating": 2,
                "cast": ["Vijay", "Nayanthara"],
                "genre": "Drama, Action",
                "releaseDate": "2022-08-12T08:36:43.000Z"
            }
    
    UPDATE MOVIE : http://localhost:5000/updateMovie/Bigil
        BODY : {
                "movieName": "Bigil",
                "rating": 10,
                "cast": ["Vijay", "Nayanthara"],
                "genre": "Drama, Action",
                "releaseDate": "2022-08-12T08:36:43.000Z"
            }
    
    DELETE MOVIE : http://localhost:5000/deleteMovie
        BODY : {"movieName" : "Enthiran"}
    
