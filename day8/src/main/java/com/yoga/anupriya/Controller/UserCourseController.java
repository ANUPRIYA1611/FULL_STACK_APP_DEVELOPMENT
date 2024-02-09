package com.yoga.anupriya.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.anupriya.Service.UserCourseService;
import com.yoga.anupriya.dto.response.BasicResponse;
import com.yoga.anupriya.dto.response.UserCourseResponse;
import com.yoga.anupriya.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RequestMapping(MyConstant.USER)
@RestController
@RequiredArgsConstructor
public class UserCourseController {
     private final UserCourseService userCourseService;
       @GetMapping(MyConstant.USERCOURSELIST)
       public ResponseEntity<BasicResponse<UserCourseResponse>> create() {
        BasicResponse<UserCourseResponse> response=new BasicResponse<>();


           try {
               response=userCourseService.getAllUserCourse();
               return new ResponseEntity<>(response, OK);
           } catch (Exception e) {
               response.setMessage("Something went wrong!");
               return new ResponseEntity<>(response, EXPECTATION_FAILED);
           }
       }
   
   
}
