# Questions

* If you have more time to do UI / UX improvements, what improvements would you make?

> I wanted to implement a progress bar which wouldn't take too long to get going, as there is a package for it, but implementing the ability for the user to skip to new places by interacting with the progress bar would be my next main UI/UX goal. The main drawback for users is the inability to skip to different places in a track which if you were halfway through listening and wanted to pick up where you started currently it's not implemented.
>
> Otherwise, improving the general look of the app through styles would be a priority as well. Importing a library for icons was something I looked into but decided not to prioritize in the 8 hours spent on this.

* Do you see any pros / cons with react-native-track-player?

>The Pros: 
>* Does not take long to setup and use if you are familiar with working with react native.
>* All the main functionality you want, including some useful hooks and state is provided from it. I was able to remove excess state management due to it.
>* You can focus on customizing the appearance of the audio player
>* Uses TypeScript, so you have typing as well as readability improvements.
>* You can use local or remote audio files, which means you could store files locally and populate a playlist from the device. 
>* Once you have registered event listeners, there is a lot you can do.
>
>
>Cons: 
>* I found the set up documentation not as straight forward, as where and when to register the service and which event listeners to add were not well documented. Their example of setting it up used some deprecated features for example
>* Building custom features that aren't provided by the library would require a lot more knowledge about the library and configuration. 
>* If you run into issues you are relying on the library to update, as well sometimes methods are deprecated. For example `stoppingAppPausesPlayback` was removed and completely changed in how it was implemented :
>
>```ts
>android: {
>  appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
>}
>```
> 

* How would you go about implementing offline listening for the episodes?

> There are two ways documented using [React-Native-Track-Player](https://github.com/react-native-kit/react-native-track-player).
>
> The first is an Offline Only mode where the audio is bundled with the application. In this case, it would likely bloat the size of the application to include a large number of files. You would just need to populate the list of tracks with urls to files in an assets folder or similar.
>
> The second method would be a hybrid mode where users can download files and allow them to be listened to offline. You could install a package to allow you to download files, such as `RNFS`, and then after each file is downloaded for the track you replace the url of the tracks in the playlist with the local filepath to that track before adding them to the playlist.

