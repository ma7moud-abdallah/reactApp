import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

export default class Movies extends Component {
    state = {
        movies: getMovies()
    }
    handleDelete = (movie) => {
        let movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
    }
    render() {
        if (this.state.movies.length === 0) return <p>there is no movies in the database</p>
        return (
            <div>
                <p>there are {this.state.movies.length} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movie) => (
                            <tr key={movie._id}>
                                <th scope="row">{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-sm btn-warning">Delete</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}
