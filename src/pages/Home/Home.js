import React from 'react';
import './Home.scss';

export function Home() {
  return (
    <div className="Home">
      <div className="search">
          <input type="text" className="search-bar"/>
          <button className="search-button">search</button>
      </div>
        <div className="learning-block">
            {JSON.parse(localStorage.getItem("posts")).map(post => (<BannerMaker title={post.title} image={post.image} description={post.description} />))}
            <BannerMaker title={"learn how to use photoshop"} description={"if you are interested in photoshop this couse will provide you with incredible help and teach you all the basics that you need to know to be a ps pro sihgnup today "} image={"Photos/photoshop-image"}/>
            <BannerMaker title={"go to school school"} description={"our school aim to teach all the kind how to go to school instead of focusing on uslaess informacion we want to provide children with the opcion to learn how to attend a school invaierment"} image={"Photos/duck-teacher"}/>
            <BannerMaker title={"learing is fun for all courses"} description={"this short but intence cousre is going to change your life in only 2 day!! Our top of the line experts will give you all the help that you will need."} image={"Photos/out-play-dog.jpg"}/>
        </div>
    </div>
  );
}




function BannerMaker ({image, title, description}) {
    return(
            <div className="costumer-box">
                <div className="box-info">
                    <img id="new-image" alt="not fount" width={"250px"} height={"150px"} src={image} />
                    <div className="learning-info">
                        <div className="box-title">{title}</div>
                        <div className="box-description">{description}</div>
                    </div>
                </div>
                <div className="box-rating">
                    <div className="star-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        / 5.00

                    </div>
                    <div className="learn-more-button">Learn more</div>
                    <div className="mark-as-interested"></div>
                </div>
            </div>
    )
}