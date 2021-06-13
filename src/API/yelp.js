import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer 1-GODIzX4trs05fV6lVPlETOAT2ucQx5go7RX8smLQsrZhlOG2-pWEpFNZb-9vlSIROZf3t3XG10UHxe5EP0_BBJlEYm-J9qstQHQVlfL7GMyUs5IjiemKxkoq7EYHYx'
    }

});

