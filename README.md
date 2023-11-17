# Nerdflix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


Features that can be tested:
1- Sorting with title (Asc/Desc)
2- Sorting with rating (Asc/Desc)
3- Like and unlike Movies
4- Responsiveness on mobile app with toggleable menu (ofc could be enhanced a lot and maybe using bootstrap 5 would be better, i was just ready with tailwind to safe time in case of i wanted to look for a soultion)


As for showing liked movies (Time wasn't enough unfortunately for me)
I had an idea about using a Subject and subscribe to user click on movies to add/remove likes, and of course with the use of real APIs gonna be much more easier :D

I used the modules with lazy loading approach as i think it fits best the bigger applications On (Develop) Branch
And included the normal way without modules on a separate branch (demonstrate_no_modules_way)

Some images also is missing because it returns 404 (i believe i could just replace them easier if it was a real HTTP call with a placeholder image)

Sorting was kinda challenging and i believe in a real world app,i should come to a better solution, as i should have much time to do some R&D, as for me, i don't mind do that outside the working hours as well :)

Some piece of codes should be moved to services as well, especially the sorting methods, so it can be resuable as wel

As for UI, The toggleable menu is made completely without bootstrap, so it might not be te best one, but at least doing it from scratch is kinda good challenge,
as i believe in BS there are ready to use Nav bars will al JS stuff ready out of the box
