import React, {Component} from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class DishDetail extends Component {


    renderComments(comment) {

        if( comment != null ) {
            const styledComments = comment.map((item) => {

                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const date = new Date(item.date);
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();
                const author = item.author;

                const styledItem = "-- " + author + " , " + months[month] + " " + day + ", " + year;

                return (
                    <div>
                        <li>
                            {item.comment} <br /> <br />
                        </li>
                        <li>
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))} <br /> <br />
                        </li>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {styledComments}
                    </ul>
                </div>
            );
        }
        else {
            return <div></div>
        }

    }

    renderDish(dish) {
        return (
            <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render() {

        if (this.props.dish != null) {

            return (
                <div className="row">
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>

                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }

}

export default DishDetail