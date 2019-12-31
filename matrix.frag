// Based on https://thebookofshaders.com/08/ by @patriciogv

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(in float x){
    return fract(sin(x)*43758.5453);
}

float random(in vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
}

float rchar(in vec2 ipos,in vec2 fpos){
    // num of pixels in individual characters
    float grid=5.;
    // size of black borders to overlay on characters
    vec2 margin=vec2(.2,.05);
    float seed=23.;
    // mask for character borders
    vec2 borders=step(margin,fpos)*step(margin,1.-fpos);
    
    // randomly choose each character pixel to be on or off
    float chardata=random(ipos*seed+floor(fpos*grid));
    return step(.5,chardata)*borders.x*borders.y;
}

// st ranges from 0.0-1.0
vec3 matrix(in vec2 st){
    float rows=50.;
    
    // ipos: which character we're displaying
    vec2 ipos=floor(st*rows);
    ipos+=vec2(.0,floor((u_time+200.)*20.*random(ipos.x+1.)));
    // pick a random brightness
    // mix square and sawtooth waves
    float bright=-(abs((sin(ipos.y/10.+2.))))*(ipos.y/10.-floor(ipos.y/10.))*.7+.2;
    
    // fpos: the position within the character
    vec2 fpos=fract(st*rows);
    vec2 center=(.5-fpos);
    float glow=(1.-dot(center,center)*3.)*2.;
    // glow = 1.0;
    
    return vec3(rchar(ipos,fpos)*bright*glow);
}

void main(){
    vec2 st=gl_FragCoord.st/min(u_resolution.x,u_resolution.y);
    
    vec3 color=matrix(st)*vec3(.2,1.,.2);
    gl_FragColor=vec4(color,1.);
}