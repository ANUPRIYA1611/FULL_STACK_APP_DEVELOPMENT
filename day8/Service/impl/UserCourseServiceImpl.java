package com.yoga.anupriya.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.UserCourseRepository;
import com.yoga.anupriya.Service.UserCourseService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserCourseResponse;
import com.yoga.anupriya.model.UserCourse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
     
    private final UserCourseRepository userCourseRepository;


     
    @Override
    public BasicResponse<UserCourseResponse> getAllUserCourse() {
        List<UserCourse> users = userCourseRepository.findAll();
        List<UserCourseResponse> userCourseResponses = users.stream().map(user->UserCourseResponse.builder()
        .userCourse_id(user.getUserCourse_id())
        // .course_id(user.getCourse_id())
        // .user_id(user.getUser_id())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserCourseResponse>builder()
        .message("User data fetched successfully!")
          .data(userCourseResponses)
          .build();
        
    }
}
