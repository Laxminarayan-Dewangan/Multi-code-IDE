import 'package:flutter/material.dart';
// Assuming shared_preferences is used for local storage in Flutter
import 'package:shared_preferences/shared_preferences.dart';

class Navbar extends StatelessWidget implements PreferredSizeWidget {
  const Navbar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 100),
      height: 90,
      color: const Color(0xFF0F0E0E),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          // Logo
          SizedBox(
            width: 170,
            child: Image.asset(
              'assets/images/logos/logo.png',
              fit: BoxFit.cover,
            ),
          ),

          // Links and Button
          Row(
            children: [
              _navLink(context, 'Home', () {
                // TODO: Navigate to Home
              }),
              const SizedBox(width: 15),
              _navLink(context, 'About', () {
                // TODO: Navigate to About
              }),
              const SizedBox(width: 15),
              _navLink(context, 'Services', () {
                // TODO: Navigate to Services
              }),
              const SizedBox(width: 15),
              _navLink(context, 'Contact', () {
                // TODO: Navigate to Contact
              }),
              const SizedBox(width: 15),
              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red,
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                ),
                onPressed: () async {
                  final prefs = await SharedPreferences.getInstance();
                  await prefs.remove('token');
                  await prefs.remove('isLoggedIn');
                  
                  // In Flutter, restarting/reloading the app is typically handled 
                  // by resetting the navigation state or routing to the login screen.
                  // Navigator.pushNamedAndRemoveUntil(context, '/login', (route) => false);
                },
                child: const Text('Logout'),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _navLink(BuildContext context, String title, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      hoverColor: Colors.transparent,
      child: Text(
        title,
        style: const TextStyle(
          color: Colors.white,
        ),
      ),
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(90);
}