# Project Plan: ChronoSphere

**Description:** A social network centered around sharing and organizing memories. Users can create timelines of their lives, connect with others, and collaboratively build shared memories.


## Development Goals

- [ ] Set up the database with tables for users, posts, comments, friendships, and likes according to the db_schema.
- [ ] Configure database connection in api/config.php.
- [ ] Implement user registration in register.php, handling input validation, password hashing, and database insertion.
- [ ] Implement user login in login.php, verifying credentials and creating sessions.
- [ ] Implement user logout in logout.php, destroying sessions.
- [ ] Develop HTML structure for index.html (landing page), register.html, login.html, home.html, profile.html, friends.html, and settings.html using Tailwind CSS for styling.
- [ ] Create reusable HTML components in components/ directory for navbar, posts, and friend requests.
- [ ] Write JavaScript in assets/js/auth.js to handle registration, login, and logout functionalities using fetch API.
- [ ] Write JavaScript in assets/js/app.js to fetch and display posts on the home page.
- [ ] Implement post creation functionality in create_post.php, allowing users to submit text and images/videos.
- [ ] Develop profile page (profile.html) with JavaScript in assets/js/profile.js to fetch and display user information from get_profile.php.
- [ ] Implement profile update functionality in update_profile.php, allowing users to change their information and profile picture.
- [ ] Implement friend request functionality in add_friend.php, accept_friend.php, and reject_friend.php.
- [ ] Implement friend list display on friends.html using get_friends.php.
- [ ] Implement friend request list display on friends.html using get_friend_requests.php.
- [ ] Implement like and unlike functionality for posts using like_post.php and unlike_post.php.
- [ ] Implement comment creation functionality using create_comment.php.
- [ ] Ensure proper error handling and security measures are in place for all API endpoints.
- [ ] Apply Tailwind CSS classes for consistent styling and responsive design across all pages.
- [ ] Refactor code and improve performance as needed.
