package com.yoga.anupriya.Service.impl;

import org.springframework.stereotype.Service;

import com.yoga.anupriya.Repository.PaymentRepository;
import com.yoga.anupriya.Service.PaymentService;
import com.yoga.anupriya.dto.request.PaymentRequest;
import com.yoga.anupriya.dto.response.RegisterResponse;
import com.yoga.anupriya.model.Payment;
import com.yoga.anupriya.model.User;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
     @Override
    public RegisterResponse addPayment(PaymentRequest request) {
        var user=Payment.builder()
                .amount(request.getAmount())
                .user(User.builder().id(request.getUser_id()).build())
                // .usercourses(UserCourse.builder().userCourse_id(request.getUsercourse_id()).build())
                // .usercourse_id(request.getUsercourse_id())
                .build();
                paymentRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("course create successfully!")
        .build();
    }
  
}
