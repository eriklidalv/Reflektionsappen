﻿namespace Reflektionsappen.Models.Requests
{
    public class ConfirmUserRequest
    {
        public string Email { get; set; }
        public string Token { get; set; }
    }
}
