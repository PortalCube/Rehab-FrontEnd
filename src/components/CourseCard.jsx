import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CourseCardContainer = styled.div`
  width: 240px;  
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;  
  display: flex;
  flex-direction: column;
`;

const CourseImage = styled.div`
  height: 150px;
  background-color: grey; 
  border-radius: 10px 10px 0 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CourseInfo = styled.div`
  height: 150px;
  padding: 0 15px; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15px; 
`;

const CourseTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;  
`;

const CourseDescription = styled.span`
  font-size: 10px;
  margin-bottom: 15px; 
  max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CourseTime = styled.span`
  font-size: 15px;
  align-self: flex-end; 
  margin-right: 10px;  
  margin-bottom: 5px;
`;

const HorizontalLine = styled.div`
  width: calc(100% - 10px);  
  height: 1px;
  background-color: black;
  margin: 0 auto; 
`;

const TagContainer = styled.div`
  display: flex;             
  flex-wrap: wrap;           
  margin-top: 2px;          
`;

const TagButton = styled.button`
  width: 60px; 
  height: 20px;
  padding: 0 10px;
  border-radius: 10px;
  font-size: 10px;
  background-color: white;
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 5px;  
  display: inline-block; 
  white-space: nowrap;
`;

const LinkedCourseCardContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CourseCard = ({ image, title, description, time, tags }) => {
  return (
    <LinkedCourseCardContainer to="/coursedetail">
      <CourseCardContainer>
        <CourseImage image={image}></CourseImage>
        <CourseInfo>
          <CourseTitle>{title}</CourseTitle>
          <CourseDescription>{description}</CourseDescription>
          <CourseTime>{time}</CourseTime>
          <HorizontalLine />
          <TagContainer>
            {tags && tags.map((tag, index) => (
              <TagButton key={index}>{tag}</TagButton>
            ))}
          </TagContainer>
        </CourseInfo>
      </CourseCardContainer>
    </LinkedCourseCardContainer>
  );
};

CourseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string) 
};

export default CourseCard;
