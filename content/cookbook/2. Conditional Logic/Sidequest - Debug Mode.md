The UI displayed in the inspector when creating UltEvent logic is just a fancy interface for the real, underlying data.

You can reveal this at any time by switching to Debug mode:

![[Attachments/Sidequest - Debug Mode.md_Attachments/Unmask.gif]]
*Switching to Debug mode reveals the data for each call. Here I modify the data of the first call to make the 2nd argument use a string instead of a return value.*

## Underlying Data of Events

Every call and argument in your event has a number that represents its position in the **Inspector**.

![[Attachments/Sidequest - Debug Mode.md_Attachments/Sidequest - Debug Mode-20250222192542360.png]]
You can hopefully see how these numbers map across in **Debug** mode:
![[Attachments/Sidequest - Debug Mode.md_Attachments/Sidequest - Debug Mode-20250222192549526.png]]
To edit calls in debug mode, you may want to look at these numbers, or look for the matching 'Method Name'.
## Use Cases - Forcing Return Values (THE RED)

Sometimes, we switch to Debug to overcome limitations of UltEvent's custom inspector.

In this example, we want to get a Rigidbody and change the connected body on a configurable joint:
![[Attachments/Sidequest - Debug Mode.md_Attachments/Sidequest - Debug Mode-20250222193135640.png]]

The UltEvent editor doesn't let use use a return value here. That's because [GetComponent](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/GameObject.GetComponent.html) can return **any type of Component**, this includes Rigidbodies, but it could also give us **any other type of component** (Transforms, Colliders, MeshRenderers, etc...)

Debug mode can be used to forcefully use a return value:
![[Attachments/Sidequest - Debug Mode.md_Attachments/Forcing Return Values.gif]]
*I locate the call for set_connectedBody, and change it from using an Object to using the 1st return value.*

This causes the argument to show up as red but will still work perfectly.

## Use Cases - Un-forcing Return Values

Sometimes the UltEvent inspector will force us to use return values. This can be overcome again by using Debug mode:

![[Attachments/2.1 Create Conditional Statements.md_Attachments/Active Based on Name 1.mp4]]
*Here, the inspector window forces us to use a return value for the 2nd argument object.Equals, when we want to use a string. Overcame by switching the type from 'Return Value' to 'String' in debug mode.*
### Full Breakdown
1. I select [`Object.name`](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Object-name.html) - and switch the mode to get instead of set.
2. I select the static [`object.Equals`](https://learn.microsoft.com/en-us/dotnet/api/system.object.equals?view=net-9.0)  method - used to compare two values.
	1. I hit a limitation - the UltEvents editor forces us to use a return value here.
	2. I overcome this by switching my Editor to Debug mode. This disables the fancy editor and shows us the raw data. Here's what I want, with annotations:
	3. ![[Attachments/2.1 Create Conditional Statements.md_Attachments/2.1 Create Conditional Statements-20250222045430342.png]]
	4. With the above info, I can see that the I need to change call `1`'s argument `1` from a return value to a string, so that I can type 'Foo'. I use debug mode to do this.
	5. I switch out of Debug mode.
	6. I add the final call - Enable the `IsFoo?` GameObject based on if the name of our other object is 'Foo'. 