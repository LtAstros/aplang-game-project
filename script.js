/* global $ */

$( document ).ready(function() {
    $("#box").hide();
    $("#cont").hide();
    var r = Math.floor(Math.random()* words.length);
    $(".vocab").click(function(event){
       defPopup();
    });
    $(".start").click(function() {
        r = Math.floor(Math.random()* words.length);
        guessWord(r);
        $("#start").hide();
        $("#cont").hide();
    });
    $("#a").click(function() {
        $("#box").hide();
        answer(r);
    });
});

function defPopup (){
    var idCheck = event.target.id;
    var popup = idCheck.substring(4, idCheck.length);
    alert(words[popup].def); 
}
function guessWord (r){
    $("#question").html("<p class='col-sm-12'>Write the word that corosponds with this definition: "+words[r].def+"</p>");
    $("#box").show();
}
function answer (r){
    if ($("#input").val() === words[r].word){
        $("#question").html("<p class=col-sm-12>Correct! the answer was "+words[r].word+".</p>");
        $("#cont").show();
    } else {
        $("#question").html("<p class=col-sm-12>Incorrect, the answer was "+words[r].word+".</p>");
        $("#cont").show();
    }
}

var words = [
        {
            word: "narrative",
            def: 'The telling of a story or an account of an event or series of events.',
        },
        {
            word: "onomatopia",
            def: 'A figure of speech in which natural sounds are imitated in the sound of words. Simple examples include such words as buzz, hiss, hum, crack, whinny, and murmur.',   
        },
        {
            word: "oxymoron",
            def: 'From the Greek for "pointedly foolish," an oxymoron is a figure of speech wherein the author groups apparently contradictory terms to suggest a paradox. Simple examples include "jumbo shrimp" and "cruel kindness." This term does not usually appear in multiple-choice questions, but there is a chance that you might find it in an essay.',   
        },
        {
            word: "paradox",
            def: 'A statement that appears to be self-contradictory or opposed to common sense but upon closer inspection contains some degree of truth or validity.(Think of the beginning of Tale of Two Cities by Dickens: "It was the best times, it was the worst times...."',   
        },
        {
            word: "parallelism",
            def: 'Also referred to as parallel construction or parallel structure, this term comes from Greek roots meaning "beside one another." It refers to the grammatical or rhetorical framing of words, phrases, sentences, or paragraphs to give structural similarity. This can involve, but is not limited to, repetition of a grammatical element such as a preposition or verbal phrase. (Again, the opening of Tale of Two Cities is an example: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness....")'   
        },
        {
            word: "anaphora",
            def: 'A sub-type of parallelism, when the exact repetition of words or phrases at the beginning of successive lines or sentences',   
        },
        {
            word: "parody",
            def: 'A work that closely imitates the style or content of another with the specific aim of comic effect and/or ridicule. It exploits peculiarities of expression.,'  
        },
        {
            word: "pedantic",
            def: 'An adjective that descibes words, phrases, or general tone that is overly scholarly, academic, or bookish (using big words for the sake of using big words).',   
        },
        {
            word: "periodic sentence",
            def: 'A sentence that presents its central meaning in a main clause at the end. This independent clause is preceded by a phrase or clause that cannot stand alone.',   
        },
        {
            word: "personification",
            def: 'A figure of speech in which the author presents or descibes concepts, animals, or objects by endowing them with human attributes or emotions.',   
        },
        {
            word: "prose",
            def: 'One of the major divisions of genre, prose refers to fiction and nonfiction, including all its forms.',   
        },
    ];