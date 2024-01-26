import React from 'react'
import styled from 'styled-components'

const BlogCard = () => {
  return (
    <Wrapper>
      <div className="blog_card">
        <div className="date">
            <span className="month">May</span>
            <span className="day">25</span>
        </div>
        <div className="image">
            <img src="/assets/user.png" alt="" />
        </div>
        <div className="blog_content">
            <div className="blog_title">
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, soluta!</p>
            <hr color='crimson'/>
            <div className="user_detail">
                <div className="user">
                    <img src="/assets/user.png" alt="" />
                </div>
                <div className="name_like_views">
                    <span className="name">Name</span>
                    <span className="like">25 Likes</span>
                    <span className="views">05 Views</span>
                </div>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    .blog_card{
        display: grid;
        grid-template-columns: 50px 200px 1fr;
        .date{
            padding: 5px;
            display: flex;
            flex-direction: column;
            .month{
                font-weight: 600;
                color: gray;
            }
            .day{
                color: crimson;
                font-size: 30px;
                font-weight: 600;
            }
        }
        .image{
            padding: 10px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .blog_content{
            padding: 10px;
            .blog_title{
                h4{
                    line-height: 25px;
                    font-weight: 400;
                    color: black;
                }
            }
            p{
                color: gray;
                font-size: 13px;
            }
            hr{
                margin: 10px 0;
                height: 0.1px;
            }
            .user_detail{
                display: flex;
                gap: 10px;
                align-items: center;
                .user{
                    width: 50px ;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        height: 100%;
                        width: 100%;
                        background-position: center;
                        object-fit: cover;

                    }
                }
                .name_like_views{
                    span{
                        padding: 0 10px;
                    }
                    .like{
                        border-left: 5px solid lightgray;
                        border-right: 5px solid lightgray;
                    }
                }
            }
        }
    }

`
export default BlogCard
