#Process - Part 00: Scope, Tools, and Setup

##Project Scope

I am intentionally keeping the scope very narrow, at least for the short term.  There are definitely some stretch goals, but for now, here is what is planned for the DevArt proposal:

- The virtual “aquarium” will consist of one digital species, that being the original fish as described in the introductory post and project description
- The application will provide a set of interactive controls allowing the user to:
-- Start, Pause, Stop, and Reset the fish’s motion
-- Set the direction in which the fish swim (Forward or Reverse)
-- Select the type of curve on which the fish swim.  Curve types include: Lissajous, 8-petal Rose (Rhodonea), Lemniscate (Figure-8), several SuperFormula-generated curves (22-tooth Gear, Simple Gear, Star), as well as a Randomly-generated curve.
-- View (and hide) the spline

The completed application will be ported to Android and iOS, and will include a touch-based GUI.  If all goes well, I will also implement user-generated paths, by means of finger-swiping on the screen (or via mouse if web-based).

Now, porting to iOS and Android may sound complex, and this brings us to a brief rundown of the Toolset.

##Tools

###Unity 3D

The heart of the setup, the primary canvas, as it were, is the Unity game engine.  We’re using the free version for now, which is more appealing in the context of open-source environments.  There are many reasons we’ve chosen Unity, probably too many to list, but chiefly Unity truly lets us build once and deploy to many platforms, literally at the touch of a button.  It is just as easy to create a build for the Web, as it is for iOS or Android.  And it really works.

Unity also supports a variety of scripting language.  As I’ve been writing JavaScript since around 1995, this makes it very appealing.  True, it’s actually “Unity Script”, an odd variant of ECMA Script, but easy enough to adapt.  There is also a fair amount of C-Sharp code floating around.

###Unity Plugins

While we aren’t using any external library, the project is very dependent on a suite of plugins that I use for almost everything I do these days.  Note that the files posted to GitHub WILL NOT include the plugins.  They cost money, and technically are under license, so I am not at liberty to give them away. I believe that they all have a free trial version, so you will have to assemble them on your own if you decide to fork the code.

- PlayMaker (Hutong Games) provides a scripting “GUI” by means of Functional State Machines (FSM).  This allows developers to code by simply connecting Actions (predefined functions) to States.  While it is feasible to build complete systems this way, you still usually have to do some “real” coding as well, and that’s fine.  Still, PlayMaker is huge help when you need to focus on larger challenges than syntax.

- Vectrosity (StarScene Software) is a vector line drawing utility that I’m using here for the generation of the splines.  You will also see later that I’m using it to actually create some of the other “species” for the app.

- NGUI (Tasharen Entertainment) puts a front end on developing the front end GUI.  It’s a huge timesaver and works beautifully.

###Math!!

As did Whitney, we’re using Polar Geometry to generate the splines, as well as the SuperFormula, which, as you’ll see, has been invaluable for producing some amazing shapes.

##Setup

While Unity is, obviously, a powerful 3D game engine, it is also quite capable of creating 2D applications as well.  And, while 3D is definitely something we’ll be pushing towards in future versions, currently **artifish** is straight 2D.  To acomplish this in Unity, you basically place a camera directly over a ground plane, and set it as “orthographic”, which serves to flatten the entire scene.  You can still layer, as you would in a 2D drawing, but there is no perspective.

Here is a screenshot of the Unity environment.

![Unity Environment](../project_images/part00-screenshot-01.jpg?raw=true “Unity Environment”)



