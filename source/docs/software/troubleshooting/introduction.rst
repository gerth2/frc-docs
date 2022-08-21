Introduction to Troubleshooting
===============================

*Troubleshooting* is the art of identifying the causes of problems, and using the cause to iterate a better solution.

Issues Will Happen
------------------

Every robot will experience problems. These can be frustrating! Rest assured, fixing these issues is something every team goes through in a season.

This section of the docs is designed to help teams identify and fix common robot issues which have control-system root causes. While not an exhaustive list of all possible issues, the hope is to provide general guidance and specific examples to reduce the most common pain points.

Symptom vs. Root Cause
----------------------

When troubleshooting, be sure to separate *Symptom* and *Root Cause*. 

The *Symptom* is the behavior you actually observe, which is not correct. For example, a robot which can only turn in place (and cannot drive straight) is a *symptom* a team might observe.

The *Root Cause* is the incorrect software, electrical hookup, or mechanical fault which actually caused the symptom to occur.

When troubleshooting effectively, a team will work backward from the observed symptom, to the root cause. Ideally, the root cause gets fixed, and in turn the symptom stops manifesting. 

Sometimes, resource constraints might make a team "patch over" a symptom without identifying or fixing root cause. Teams should tread cautiously here, as patches are prone to break or cause more issues later on.

On Working Methodically
-----------------------

Effective troubleshooting requires teams to work methodically.

The Scientific Process, in Real-Time
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The core of all troubleshooting strategies is the same as the scientific process. Namely:

 . Observe the world around you
 . Propose a hypothesis
 . Design and execute a test of that hypothesis
 . Observe and interpret the results
 . Repeat

In the case of most FRC robot troubleshooting, the hypothesis will be relatively small. A valid hypothesis could simply be "If I add a `* -1` to line 354 of my code, it should fix the motor that's running backward". The experiment would then be to make the change, upload the code, and attempt to reproduce the backward motor issue. If the motor is now running the correct direction, it is reasonable to assume the hypothesis was correct, and no further action is needed. However, if the issue persists, one could assume the hypothesis was not entirely correct, and the process must be repeated with a new hypothesis.

Change One Variable at a Time
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When interpreting the results of an experiment, it is critical that the experiment has controlled for all but one variable. Having only one changing variable is what allows experiment results to be interpreted to a single root cause. 

If many variables change, and the problem goes away, you will not know which variable actually fixed the root cause.

While it may be tempting to change a lot of things hoping one of them fixes the issue, this will likely lead to a lot of things changed unnecessarily.

Be Targeted with Assumptions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A naïve approach to troubleshooting will start by assuming *anything* could be the root cause, and 

Be Egoless
^^^^^^^^^^

Single vs. Multiple Points of Failure 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


Undirected Guess and Check is Ineffective
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Practice, Practice, Practice
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Troubleshooting is a learned skill. While there are few concrete facts and figures to memorize, seeing examples of failures and their root causes over and over again is the best way to get better at isolating root causes from symptoms. 

One will often see more experienced mentors or students look at an issue and quickly state a root cause. And, often, they'll be correct. Rest assured, this ability isn't magical or genetic - it's learned. Folks who are good at troubleshooting will *still* go through all the steps and processes these docs describe. However, they draw from a broader set of exposure to recognize patterns faster, and eliminate unlikely possibilities.

Be intentional about spending time practicing troubleshooting, and try not to worry if it takes longer than others. 
