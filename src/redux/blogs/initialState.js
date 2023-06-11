
const initialState = [
    {
        id: 1,
        categories_name: "Article",
        blog_name: " How to make bulding ",
        blog_img: "https://images.unsplash.com/photo-1661103517104-9d118ccad126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        author_name: "Korim",
        author_pic: "https://images.unsplash.com/photo-1660228321829-5f90c6d94ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        published_time: "20 Mar, 2022",
        reading_time: "9 min read"

    },
    {
        id: 2,
        categories_name: "Food",
        blog_name: " Food is Good",
        blog_img: "https://images.unsplash.com/photo-1632153380265-d1f815db5a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        author_name: "Dalim",
        author_pic: "https://images.unsplash.com/photo-1660054031395-3c01627e8842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 Mar, 2022",
        reading_time: "9 min read"

    },
    {
        id: 3,
        categories_name: "Article",
        blog_name: " Improve your customer experience",
        blog_img: "https://images.unsplash.com/photo-1660866838784-6c5158c0f979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        author_name: "Sumit",
        author_pic: "https://images.unsplash.com/photo-1548536082-6959567349c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 Mar, 2022",
        reading_time: "9 min read"

    },
    {
        id: 4,
        categories_name: "Programming",
        blog_name: " Improve your customer experience",
        blog_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
        author_name: "Sumit",
        author_pic: "https://images.unsplash.com/photo-1658958698611-fd4f7ea1081b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 Mar, 2022",
        reading_time: "9 min read"

    },
    {
        id: 5,
        categories_name: "Food",
        blog_name: " Food Blog",
        blog_img: "https://images.unsplash.com/photo-1660034096812-37fc304dd763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        author_name: "Naimur",
        author_pic: "https://images.unsplash.com/photo-1659273145320-4a9750783c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 April, 2022",
        reading_time: "19 min read"

    },
    {
        id: 6,
        categories_name: "Food",
        blog_name: " Sweet",
        blog_img: "https://images.unsplash.com/photo-1659432766163-fa6b5fa0ee73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        author_name: "Naimur",
        author_pic: "https://images.unsplash.com/photo-1659273145320-4a9750783c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 April, 2021",
        reading_time: "19 min read"

    },
    {
        id: 7,
        categories_name: "Food",
        blog_name: "BreakFast with egg",
        blog_img: "https://images.unsplash.com/photo-1660034096812-37fc304dd763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        author_name: "Naimur",
        author_pic: "https://images.unsplash.com/photo-1659273145320-4a9750783c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "20 April, 2021",
        reading_time: "19 min read"

    },
    {
        id: 8,
        categories_name: "Travel",
        blog_name: " Improve your customer experience",
        blog_img: "https://images.unsplash.com/photo-1660295527326-358b6d3e7ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        author_name: "Sumit",
        author_pic: "https://images.unsplash.com/photo-1658958698611-fd4f7ea1081b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        published_time: "01 Mar, 2022",
        reading_time: "15 min read"

    },
];

export default initialState;